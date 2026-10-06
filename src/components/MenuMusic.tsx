'use client';

import { useEffect, useRef, useState } from 'react';
import { Music2, Pause, Play } from 'lucide-react';

const volumeKey = 'portfolio-menu-music-volume';
const loopSeconds = 24;

// An original, seamless E-minor menu theme: warm pads and a sparse synth arpeggio.
async function createTheme() {
  const sampleRate = 22050;
  const render = new OfflineAudioContext(2, sampleRate * 36, sampleRate);
  const filter = render.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 1800;
  filter.Q.value = 0.5;
  filter.connect(render.destination);

  const note = (midi: number, start: number, duration: number, level: number, pad = false) => {
    const oscillator = render.createOscillator();
    const envelope = render.createGain();
    const pan = render.createStereoPanner();
    oscillator.type = pad ? 'triangle' : 'sine';
    oscillator.frequency.value = 440 * 2 ** ((midi - 69) / 12);
    pan.pan.value = pad ? (midi % 3 - 1) * 0.35 : 0.15;
    envelope.gain.setValueAtTime(0, start);
    envelope.gain.linearRampToValueAtTime(level, start + (pad ? 1.2 : 0.035));
    envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(envelope);
    envelope.connect(pan);
    pan.connect(filter);
    oscillator.start(start);
    oscillator.stop(start + duration);
  };

  const chords = [[40, 55, 59, 64], [36, 55, 60, 64], [43, 55, 59, 62], [38, 54, 57, 62]];
  // Render a full cycle on either side of the cut so release tails wrap naturally.
  for (let bar = 0; bar < 6; bar++) {
    const chord = chords[bar % chords.length];
    const start = bar * 6;
    chord.forEach((pitch, index) => note(pitch, start, 8, index === 0 ? 0.075 : 0.045, true));
    [0, 2, 1, 3, 2, 1, 3, 2].forEach((index, step) => {
      note(chord[index] + 12, start + step * 0.75, 1.7, 0.025);
    });
  }

  const rendered = await render.startRendering();
  const loop = new AudioBuffer({ length: loopSeconds * sampleRate, numberOfChannels: 2, sampleRate });
  for (let channel = 0; channel < 2; channel++) {
    loop.copyToChannel(rendered.getChannelData(channel).subarray(12 * sampleRate, 36 * sampleRate), channel);
  }
  return loop;
}

export function MenuMusic() {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [volume, setVolume] = useState(18);
  const [error, setError] = useState('');
  const contextRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);
  const playingRef = useRef(false);
  const mountedRef = useRef(false);
  const volumeRef = useRef(18);

  useEffect(() => {
    mountedRef.current = true;
    try {
      const stored = localStorage.getItem(volumeKey);
      const saved = stored === null ? 18 : Number(stored);
      if (Number.isFinite(saved) && saved >= 0 && saved <= 50) {
        volumeRef.current = saved;
        setVolume(saved);
      }
    } catch { /* Playback also works without storage. */ }

    const onVisibility = () => {
      const context = contextRef.current;
      if (!context) return;
      if (document.hidden) void context.suspend().catch(() => {});
      else if (playingRef.current) void context.resume().catch(() => {
        playingRef.current = false;
        if (mountedRef.current) setPlaying(false);
      });
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      mountedRef.current = false;
      playingRef.current = false;
      document.removeEventListener('visibilitychange', onVisibility);
      sourceRef.current?.stop();
      sourceRef.current = null;
      gainRef.current = null;
      const context = contextRef.current;
      contextRef.current = null;
      if (context) void context.close().catch(() => {});
    };
  }, []);

  const toggle = async () => {
    if (loading) return;
    setError('');
    try {
      if (playingRef.current) {
        await contextRef.current?.suspend();
        playingRef.current = false;
        if (mountedRef.current) setPlaying(false);
        return;
      }

      setLoading(true);
      // Resume during the button gesture, before rendering the soundtrack.
      contextRef.current ??= new AudioContext();
      const context = contextRef.current;
      await context.resume();
      if (!sourceRef.current) {
        bufferRef.current ??= await createTheme();
        if (!mountedRef.current || context.state === 'closed') return;
        const gain = context.createGain();
        gain.gain.setValueAtTime(0, context.currentTime);
        gain.gain.linearRampToValueAtTime(volumeRef.current / 100, context.currentTime + 1.5);
        gain.connect(context.destination);
        const source = context.createBufferSource();
        source.buffer = bufferRef.current;
        source.loop = true;
        source.connect(gain);
        source.start();
        gainRef.current = gain;
        sourceRef.current = source;
      }
      playingRef.current = true;
      if (document.hidden) await context.suspend();
      if (mountedRef.current) setPlaying(true);
    } catch {
      playingRef.current = false;
      if (mountedRef.current) {
        setPlaying(false);
        setError('Music could not start. Try again.');
      }
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  };

  const changeVolume = (value: number) => {
    volumeRef.current = value;
    setVolume(value);
    const context = contextRef.current;
    if (context && gainRef.current) {
      gainRef.current.gain.cancelScheduledValues(context.currentTime);
      gainRef.current.gain.setTargetAtTime(value / 100, context.currentTime, 0.08);
    }
    try { localStorage.setItem(volumeKey, String(value)); } catch { /* Optional persistence. */ }
  };

  return (
    <aside aria-label="Background music" data-ui-sound="off" className="fixed bottom-4 left-4 z-40 editorial-glass rounded-2xl px-3 py-2 shadow-lg max-w-[calc(100vw-2rem)]">
      <div className="flex items-center gap-3">
        <Music2 aria-hidden="true" className={`w-3.5 h-3.5 ${playing ? 'text-cyan-accent' : 'text-zinc-500'}`} />
        <button type="button" onClick={toggle} disabled={loading} aria-pressed={playing}
          aria-label={playing ? 'Pause background music' : 'Play background music'}
          className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-zinc-300 hover:text-cyan-accent transition-colors rounded focus-visible:outline-2 focus-visible:outline-cyan-accent focus-visible:outline-offset-4 disabled:opacity-50">
          {playing ? <Pause aria-hidden="true" className="w-3 h-3" /> : <Play aria-hidden="true" className="w-3 h-3" />}
          {loading ? 'LOADING…' : playing ? 'MUSIC ON' : 'PLAY MENU MUSIC'}
        </button>
        {playing && <input type="range" min="0" max="50" step="1" value={volume}
          onChange={(event) => changeVolume(Number(event.target.value))}
          aria-label="Background music volume" aria-valuetext={`${volume} percent`}
          className="w-16 accent-cyan-accent cursor-pointer" />}
      </div>
      <p role="status" className={error ? 'text-[10px] text-zinc-400 mt-2' : 'sr-only'}>{error}</p>
    </aside>
  );
}
