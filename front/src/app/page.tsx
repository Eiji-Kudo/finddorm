import Header from "@/app/component/Header";
import { MantineProvider } from "@mantine/core";

export default function Home() {
  return (
    <>
      <MantineProvider theme={{ colorScheme: "light" } as any}>
        <main>
          <Header />
        </main>
      </MantineProvider>
    </>
  );
}
