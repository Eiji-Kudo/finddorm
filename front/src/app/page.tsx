import Title from '@/app/component/title';
import { MantineProvider } from '@mantine/core';

export default function Home() {
  return (
    <>  
      <MantineProvider theme={{ colorScheme: 'light'} as any}>
        <main>
          <Title />
        </main>
      </MantineProvider>
    </>
  );
}
