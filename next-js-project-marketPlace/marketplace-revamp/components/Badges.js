const Badges = () => {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full h-[26px]`}
      style={{
        width: badgeWidth,
        padding: "10px 0px",
        backgroundColor: badgeBgColor,
        color: badgeTextColor,
      }}
    >
      <span className={`${textSize} ${textWeight}`}>{badgeContent}</span>
    </div>
  );
};
