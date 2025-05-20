
        "use client";

        import { usePathname } from "next/navigation";
        import Header from "./Header";
        import SideMenu from "./SideMenu";

        export default function AppLayout({ children }: { children: React.ReactNode }) {
        const pathname = usePathname();

        const isLoginPage = pathname === "/login";

        return (
<div>
    {!isLoginPage && <Header />}
    <div className="layout">
        {!isLoginPage && <SideMenu />}
        <main>{children}</main>
    </div>
</div>
        );
        }
