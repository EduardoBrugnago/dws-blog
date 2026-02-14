import { Card, Body } from "./styles";
import { SkeletonBlock } from "./skeleton-styles";

export function PostCardSkeleton() {
  return (
    <Card>
      <SkeletonBlock $width="314px" $height="425px" $borderRadius="0" />
      <Body>
        <SkeletonBlock $width="50%" $height="12px" />

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <SkeletonBlock $width="80%" $height="20px" />
          <SkeletonBlock $width="100%" $height="14px" />
          <SkeletonBlock $width="90%" $height="14px" />
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <SkeletonBlock $width="64px" $height="28px" $borderRadius="42px" />
          <SkeletonBlock $width="72px" $height="28px" $borderRadius="42px" />
        </div>
      </Body>
    </Card>
  );
}
