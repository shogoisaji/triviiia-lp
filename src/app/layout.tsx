import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Triviiia - 楽しく学べるトリビアアプリ",
//   description: "友達と競いながら様々な分野の知識を身につけよう！",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
