import { IconInformationContainer, IconImage } from "./styled";
import { IconType } from "react-icons";


interface IconInformationProps {
  "icon-svg": IconType;
  "icon-color"?: "yellow" | "yellow-dark" | "purple" | "brown";
  title?: string;
};


export function IconInformation({

  "icon-svg": IconSvg,
  "icon-color": iconColor,
  title,

}: IconInformationProps) {
  
  return (
    <IconInformationContainer>
      <IconImage
        data-icon-color={iconColor}
      >
        <IconSvg/>
      </IconImage>

      { title && <p>{title}</p> }

    </IconInformationContainer>
  );
};