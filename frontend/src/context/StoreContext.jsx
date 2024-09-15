import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Welcome from "../pages/Welcome/Welcome";
import PaymentDetails from "../pages/PaymentDetails/PaymentDetails";
import MarkDetails from "../pages/MarkDetails/MarkDetails";
import Achievement from "../pages/Achievement/Achievement";
import Attendance from "../pages/Attendance/Attendance";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const navigate = useNavigate();
  
  const [showLogin, setShowLogin] = useState(false);
  const [loginType, setLoginType] = useState("");
  const [showBar, setShowBar] = useState(false);
  const [activeComponent, setActiveComponent] = useState('welcome');

  const handleShowLogin = (type) => {
    setShowLogin(true);
    setLoginType(type);
  };

  const lectureView = (subject) => {
    if (subject) {
      navigate('/lectureDashboard');
    }
  };

  const checkNotes = (subject) => {
    if (subject) {
      navigate('/visitPdf');
    }
  };

  // const navigateToCollections = (type) => {
  //   if (type === "videos") {
  //     navigate('/videoCollections');
  //   } else {
  //     navigate('/noteCollections');
  //   }
  // };


  const loginNavigatePage = (type) => {
    if (type === "parent") {
      navigate('/dashboard');
    } else {
      navigate('/lectureCollection');
    }
  };

  const handleButtonClick = (component) => {
    setActiveComponent(component);
    if (window.innerWidth <= 900) {
      setShowBar(false);
    }
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'welcome':
        return <Welcome />;
      case 'paymentDetails':
        return <PaymentDetails setPending={setActiveComponent} />;
      case 'markDetails':
        return <MarkDetails />;
      case 'pendingStatus':
        return <PendingStatus />;
      case 'achievement':
        return <Achievement />;
      case 'attendance':
        return <Attendance />;
      default:
        return <Welcome />;
    }
  };

  const contextValue = {
    showLogin,
    setShowLogin,
    loginType,
    setLoginType,
    handleShowLogin,
    // navigateToCollections,
    loginNavigatePage,
    lectureView,
    checkNotes,
    handleButtonClick,
    renderActiveComponent,
    showBar,   
    setShowBar,
    activeComponent,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
