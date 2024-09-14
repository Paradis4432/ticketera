import SideBar from "@/components/sidebar/SideBar"

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <SideBar />
      {children}
    </main>
  )
}
