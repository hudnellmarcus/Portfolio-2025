import { useCallback } from "react";
import ReactGA from "react-ga4";

export const useAnalyticsTracking = () => {
  const trackLiveSiteClick = useCallback(
    (projectName: string, liveUrl: string) => {
      ReactGA.event({
        category: "Project Link",
        action: "Click Live Site",
        label: projectName,
      });
      window.open(liveUrl, "_blank", "noopener,noreferrer");
    },
    []
  );

  const trackGithubClick = useCallback(
    (projectName: string, githubUrl: string) => {
      ReactGA.event({
        category: "Project Link",
        action: "Click Github",
        label: projectName,
      });
      window.open(githubUrl, "_blank", "noopener,noreferrer");
    }, []);

    return { trackLiveSiteClick, trackGithubClick };
};
