'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const preferenceKey = 'portfolio-interface-sounds';
const interactiveSelector = 'button, a[href], [role="button"]';

export function InterfaceSounds() {
  const [enabled, setEnabled] = useState(true);
  const enabledRef = useRef(true);
  const contextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    try {
      enabledRef.current = localStorage.getItem(preferenceKey) !== 'off';
      setEnabled(enabledRef.current);
    } catch { /* Sound remains available when storage is restricted. */ }

    let lastHover = 0;
    let disposed = false;

    const play = (click: boolean) => {
      if (!enabledRef.current || disposed) return;
      try {
        const context = contextRef.current;
        if (!context || context.state !== 'running') return;
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const now = context.currentTime;
        const duration = click ? 0.065 : 0.035;
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(click ? 720 : 1100, now);
        oscillator.frequency.exponentialRampToValueAtTime(click ? 420 : 850, now + duration);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(click ? 0.035 : 0.015, now + 0.004);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
        oscillator.start(now);
        oscillator.stop(now + duration);
      } catch { /* Audio must never interfere with navigation. */ }
    };

    const getControl = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return null;
      const control = target.closest<HTMLElement>(interactiveSelector);
      if (!control || control.closest('[data-ui-sound="off"], [inert]') ||
          control.matches(':disabled, [aria-disabled="true"]')) return null;
      return control;
    };

    const onClick = (event: MouseEvent) => {
      if (!event.isTrusted || !enabledRef.current) return;
      // Browsers require a user gesture before audio can start.
      try {
        contextRef.current ??= new AudioContext();
        const context = contextRef.current;
        const control = getControl(event.target);
        if (context.state === 'suspended') {
          void context.resume().then(() => { if (control) play(true); }).catch(() => {});
        } else if (control) play(true);
      } catch { /* Browsers without Web Audio retain normal controls. */ }
    };

    const onHover = (event: PointerEvent) => {
      if (!event.isTrusted || event.pointerType !== 'mouse') return;
      const control = getControl(event.target);
      if (!control || (event.relatedTarget instanceof Node && control.contains(event.relatedTarget))) return;
      const now = performance.now();
      if (now - lastHover < 100) return;
      lastHover = now;
      play(false);
    };

    document.addEventListener('click', onClick, true);
    document.addEventListener('pointerover', onHover, true);
    return () => {
      disposed = true;
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('pointerover', onHover, true);
      const context = contextRef.current;
      contextRef.current = null;
      if (context) void context.close().catch(() => {});
    };
  }, []);

  const toggle = () => {
    const next = !enabledRef.current;
    enabledRef.current = next;
    setEnabled(next);
    try { localStorage.setItem(preferenceKey, next ? 'on' : 'off'); } catch { /* Optional persistence. */ }
    if (!next && contextRef.current?.state === 'running') {
      void contextRef.current.suspend().catch(() => {});
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      data-ui-sound="off"
      aria-label={enabled ? 'Mute interface sounds' : 'Enable interface sounds'}
      aria-pressed={enabled}
      title={enabled ? 'Sound FX on' : 'Sound FX off'}
      className="p-1.5 rounded-full text-zinc-400 hover:text-cyan-accent hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-accent focus-visible:outline-offset-2"
    >
      {enabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
    </button>
  );
}
