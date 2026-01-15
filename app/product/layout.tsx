export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[1280px] mx-auto w-full min-h-screen">
      {children}
    </div>
  );
}
