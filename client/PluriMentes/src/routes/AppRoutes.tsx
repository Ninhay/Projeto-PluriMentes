import { ROUTES } from "@/constants/routes";
import AutismoPage from "@/pages/AutismoPage";
import ComunidadePage from "@/pages/ComunidadePage";
import EducacaoPage from "@/pages/EducacaoPage";
import GlossarioPage from "@/pages/GlossarioPage";
import HomePage from "@/pages/HomePage";
import NeurodivergenciaDetalhePage from "@/pages/NeurodivergenciaDetalhePage";
import NeurodivergenciaPage from "@/pages/NeuridivergenciaPage";
import SomesPage from "@/pages/SomesPage";

export default function AppRoutes() {
  const { pathname } = window.location;

  if (pathname === ROUTES.neurodivergencia) return <NeurodivergenciaPage />;
  if (pathname === ROUTES.autismo) return <AutismoPage />;
  if (pathname === ROUTES.comunidade) return <ComunidadePage />;
  if (pathname === ROUTES.educacao) return <EducacaoPage />;
  if (pathname === ROUTES.glossario) return <GlossarioPage />;
  if (pathname === ROUTES.sobreNos) return <SomesPage />;
  if (pathname.startsWith(ROUTES.neurodivergencias)) {
    return <NeurodivergenciaDetalhePage pathname={pathname} />;
  }

  return <HomePage />;
}
