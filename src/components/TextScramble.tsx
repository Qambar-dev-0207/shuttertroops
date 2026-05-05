import { useState, useEffect } from 'react';

interface QueueItem {
  from: string;
  to: string;
  start: number;
  end: number;
  char: string;
}

const TextScramble = ({ text }: { text: string }) => {
  const [output, setOutput] = useState('');
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    let frame = 0;
    let timer: number;
    const queue: QueueItem[] = [];
    
    for (let i = 0; i < text.length; i++) {
      const from = '';
      const to = text[i];
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end, char: '' });
    }

    const update = () => {
      let complete = 0;
      let newOutput = '';
      
      for (let i = 0, n = queue.length; i < n; i++) {
        const { from, to, start, end } = queue[i];
        let { char } = queue[i];
        if (frame >= end) {
          complete++;
          newOutput += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue[i].char = char;
          }
          newOutput += char;
        } else {
          newOutput += from;
        }
      }
      
      setOutput(newOutput);
      
      if (complete === queue.length) {
        cancelAnimationFrame(timer);
      } else {
        frame++;
        timer = requestAnimationFrame(update);
      }
    };

    update();
    return () => cancelAnimationFrame(timer);
  }, [text]);

  return <>{output}</>;
};

export default TextScramble;
