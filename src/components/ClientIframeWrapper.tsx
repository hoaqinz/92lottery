"use client";

import IframeLoader from './IframeLoader';

interface ClientIframeWrapperProps {
  src: string;
  title?: string;
}

export default function ClientIframeWrapper({ src, title }: ClientIframeWrapperProps) {
  return <IframeLoader src={src} title={title} />;
}
