import ProgressBar from "@/components/progress-bar/ProgressBar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <main className="ml-64">
        <ProgressBar />
        {children}
      </main>
    </>
  )
}
