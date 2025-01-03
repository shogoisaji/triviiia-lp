import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-custom-dark">
        {children}
        <Footer />
      </body>
    </html>
  );
}
