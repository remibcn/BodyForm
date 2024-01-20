'use client'

import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <ChakraProvider>
        <body>{children}</body>
      </ChakraProvider>

    </html>
  );
}
