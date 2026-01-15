export default function MoonlabLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen mx-0">
      {children}
    </div>
  );
}
