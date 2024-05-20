export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    // https://nextjs.org/docs/app/building-your-application/routing/parallel-routes

    return (
        <div>
            if user == client then show list of events
            else show list of events with minor metrics that go to /events/id
            {children}
        </div>

    );
}
