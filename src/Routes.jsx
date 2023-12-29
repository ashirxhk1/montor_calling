import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SettingsTwo = React.lazy(() => import("pages/SettingsTwo"));
const Settings = React.lazy(() => import("pages/Settings"));
const SettingsOne = React.lazy(() => import("pages/SettingsOne"));
const Notifications = React.lazy(() => import("pages/Notifications"));
const CustomerService = React.lazy(() => import("pages/CustomerService"));
const Finance = React.lazy(() => import("pages/Finance"));
const ContentManagement = React.lazy(() => import("pages/ContentManagement"));
const SessionManagement = React.lazy(() => import("pages/SessionManagement"));
const MentorManagement = React.lazy(() => import("pages/MentorManagement"));
const AnalyticsandReporting = React.lazy(
  () => import("pages/AnalyticsandReporting"),
);
const MenteeDetailPage = React.lazy(() => import("pages/MenteeDetailPage"));
const MentorDetailPage = React.lazy(() => import("pages/MentorDetailPage"));
const UserManagement = React.lazy(() => import("pages/UserManagement"));
const DesktopTwentyEight = React.lazy(() => import("pages/DesktopTwentyEight"));
const DesktopTwentySeven = React.lazy(() => import("pages/DesktopTwentySeven"));
const DesktopTwentyFive = React.lazy(() => import("pages/DesktopTwentyFive"));
const DesktopTwentyNine = React.lazy(() => import("pages/DesktopTwentyNine"));
const DesktopTwentyFour = React.lazy(() => import("pages/DesktopTwentyFour"));
const DesktopTwentyThree = React.lazy(() => import("pages/DesktopTwentyThree"));
const DesktopTwentyTwo = React.lazy(() => import("pages/DesktopTwentyTwo"));
const DesktopTwentyOne = React.lazy(() => import("pages/DesktopTwentyOne"));
const DesktopTwenty = React.lazy(() => import("pages/DesktopTwenty"));
const DesktopNineteen = React.lazy(() => import("pages/DesktopNineteen"));
const DesktopSeventeen = React.lazy(() => import("pages/DesktopSeventeen"));
const LoginEighteen = React.lazy(() => import("pages/LoginEighteen"));
const LoginSixteen = React.lazy(() => import("pages/LoginSixteen"));
const LoginFifteen = React.lazy(() => import("pages/LoginFifteen"));
const LoginFourteen = React.lazy(() => import("pages/LoginFourteen"));
const LoginThirteen = React.lazy(() => import("pages/LoginThirteen"));
const LoginTwelve = React.lazy(() => import("pages/LoginTwelve"));
const DesktopThirteen = React.lazy(() => import("pages/DesktopThirteen"));
const DesktopFifteen = React.lazy(() => import("pages/DesktopFifteen"));
const DesktopEleven = React.lazy(() => import("pages/DesktopEleven"));
const DesktopFourteen = React.lazy(() => import("pages/DesktopFourteen"));
const DesktopTwelve = React.lazy(() => import("pages/DesktopTwelve"));
const DesktopTen = React.lazy(() => import("pages/DesktopTen"));
const DesktopNine = React.lazy(() => import("pages/DesktopNine"));
const DesktopEight = React.lazy(() => import("pages/DesktopEight"));
const DesktopSeven = React.lazy(() => import("pages/DesktopSeven"));
const DesktopSix = React.lazy(() => import("pages/DesktopSix"));
const LoginSeventeen = React.lazy(() => import("pages/LoginSeventeen"));
const LoginEleven = React.lazy(() => import("pages/LoginEleven"));
const LoginEight = React.lazy(() => import("pages/LoginEight"));
const LoginSeven = React.lazy(() => import("pages/LoginSeven"));
const DesktopFive = React.lazy(() => import("pages/DesktopFive"));
const DesktopFour = React.lazy(() => import("pages/DesktopFour"));
const DesktopThree = React.lazy(() => import("pages/DesktopThree"));
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const DesktopSixteen = React.lazy(() => import("pages/DesktopSixteen"));
const FrameOne = React.lazy(() => import("pages/FrameOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frameone" element={<FrameOne />} />
          <Route path="/desktopsixteen" element={<DesktopSixteen />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route path="/desktopthree" element={<DesktopThree />} />
          <Route path="/desktopfour" element={<DesktopFour />} />
          <Route path="/desktopfive" element={<DesktopFive />} />
          <Route path="/loginseven" element={<LoginSeven />} />
          <Route path="/logineight" element={<LoginEight />} />
          <Route path="/logineleven" element={<LoginEleven />} />
          <Route path="/loginseventeen" element={<LoginSeventeen />} />
          <Route path="/desktopsix" element={<DesktopSix />} />
          <Route path="/desktopseven" element={<DesktopSeven />} />
          <Route path="/desktopeight" element={<DesktopEight />} />
          <Route path="/desktopnine" element={<DesktopNine />} />
          <Route path="/desktopten" element={<DesktopTen />} />
          <Route path="/desktoptwelve" element={<DesktopTwelve />} />
          <Route path="/desktopfourteen" element={<DesktopFourteen />} />
          <Route path="/desktopeleven" element={<DesktopEleven />} />
          <Route path="/desktopfifteen" element={<DesktopFifteen />} />
          <Route path="/desktopthirteen" element={<DesktopThirteen />} />
          <Route path="/logintwelve" element={<LoginTwelve />} />
          <Route path="/loginthirteen" element={<LoginThirteen />} />
          <Route path="/loginfourteen" element={<LoginFourteen />} />
          <Route path="/loginfifteen" element={<LoginFifteen />} />
          <Route path="/loginsixteen" element={<LoginSixteen />} />
          <Route path="/logineighteen" element={<LoginEighteen />} />
          <Route path="/desktopseventeen" element={<DesktopSeventeen />} />
          <Route path="/desktopnineteen" element={<DesktopNineteen />} />
          <Route path="/desktoptwenty" element={<DesktopTwenty />} />
          <Route path="/desktoptwentyone" element={<DesktopTwentyOne />} />
          <Route path="/desktoptwentytwo" element={<DesktopTwentyTwo />} />
          <Route path="/desktoptwentythree" element={<DesktopTwentyThree />} />
          <Route path="/desktoptwentyfour" element={<DesktopTwentyFour />} />
          <Route path="/desktoptwentynine" element={<DesktopTwentyNine />} />
          <Route path="/desktoptwentyfive" element={<DesktopTwentyFive />} />
          <Route path="/desktoptwentyseven" element={<DesktopTwentySeven />} />
          <Route path="/desktoptwentyeight" element={<DesktopTwentyEight />} />
          <Route path="/usermanagement" element={<UserManagement />} />
          <Route path="/mentordetailpage" element={<MentorDetailPage />} />
          <Route path="/menteedetailpage" element={<MenteeDetailPage />} />
          <Route
            path="/analyticsandreporting"
            element={<AnalyticsandReporting />}
          />
          <Route path="/mentormanagement" element={<MentorManagement />} />
          <Route path="/sessionmanagement" element={<SessionManagement />} />
          <Route path="/contentmanagement" element={<ContentManagement />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/customerservice" element={<CustomerService />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settingsone" element={<SettingsOne />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settingstwo" element={<SettingsTwo />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
