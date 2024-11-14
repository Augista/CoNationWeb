import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import Home2Main from "@/components/layout/main/Home2Main";

export default function Home() {
  return (
    <PageWrapper
    isNavbarAppointmentBtn={true}
    footerBg={"dark"}
    isNotTransparent={true}
  >
    <Home2Main/>
  </PageWrapper>
  );
}
