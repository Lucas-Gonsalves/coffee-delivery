import { TagContainer, TagColors } from "./styles";


interface TagProps {
  "tag-title": string;
  "tag-color"?: TagColors;
};

export function Tag({
  
  "tag-title": tagTitle,
  "tag-color": tagColor

}: TagProps) {

  return(
    <TagContainer
      data-tag-color={tagColor}
    >
      { tagTitle }
    </TagContainer>
  );
};