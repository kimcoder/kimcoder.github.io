import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

type MermaidProps = {
  diagram: string;
};

mermaid.mermaidAPI.initialize({
  startOnLoad: true,
  logLevel: 5,
});

const Mermaid = ({ diagram }: MermaidProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && diagram !== '') {
      mermaid.mermaidAPI.render('mermaid-preview', diagram).then((res) => (ref.current.innerHTML = res.svg));
    }
  }, [diagram]);

  return <div key='mermaid-preview' ref={ref} className='flex justify-center' />;
};

export default Mermaid;
