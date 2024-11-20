'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdSunny } from 'react-icons/md';
import { BsMoonStarsFill } from 'react-icons/bs';
import { Button } from './ui/button';

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; 

  return (
    <div className="text-xl font-bold h-8 w-8">
      {theme === 'dark' ? (
        <Button
          className="text-slate-300 bg-accent/20 hover:bg-accent/10 hover:transition duration-100"
          onClick={() => setTheme('light')}
        >
          <MdSunny />
        </Button>
      ) : (
        <Button
          className="text-slate-800 bg-slate-100/15  hover:bg-background-1/30 hover:transition duration-500"
          onClick={() => setTheme('dark')}
        >
          <BsMoonStarsFill />
        </Button>
      )}
    </div>
  );
}

export default ThemeSwitch;
