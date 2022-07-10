import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import HelpIcon from "@mui/icons-material/Help";
import { StatusInfo } from "../../Enums/Status.Enum";

interface IProps {
  status: string;
}

const StatusElement: React.FC<IProps> = ({ status }) => {
  const checkStatusAndDisplayIcon = () => {
    switch (status) {
      case StatusInfo.DEAD:
        return <ReportGmailerrorredIcon color="error" />;
      case StatusInfo.ALIVE:
        return <CheckCircleOutlineIcon color="success" />;
      default:
        return <HelpIcon color="disabled" />;
    }
  };

  return (
    <div className="singleRow__status-container">
      {checkStatusAndDisplayIcon()}
      <span>{status}</span>
    </div>
  );
};

export default StatusElement;
