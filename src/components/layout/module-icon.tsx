type ModuleName =
  | "dashboard"
  | "pages"
  | "contentIdeas"
  | "seoChecklist"
  | "growthExperiments"
  | "insights";

type ModuleIconProps = {
  module: ModuleName;
  className?: string;
};

const baseClass = "h-4 w-4";

export function ModuleIcon({ module, className }: ModuleIconProps) {
  const iconClass = className ? `${baseClass} ${className}` : baseClass;

  switch (module) {
    case "dashboard":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path d="M4 4h7v7H4V4Zm9 0h7v4h-7V4ZM13 10h7v10h-7V10ZM4 13h7v7H4v-7Z" fill="currentColor" />
        </svg>
      );
    case "pages":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path d="M6 4h10l4 4v12H6V4Zm9 1.5V9h3.5L15 5.5Z" fill="currentColor" />
        </svg>
      );
    case "contentIdeas":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path d="M12 3a6.5 6.5 0 0 0-3.9 11.7c.6.4.9 1 .9 1.7V17h6v-.6c0-.7.3-1.3.9-1.7A6.5 6.5 0 0 0 12 3Zm-3 16h6v2H9v-2Z" fill="currentColor" />
        </svg>
      );
    case "seoChecklist":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path d="M5 4h14v16H5V4Zm3 3h6v2H8V7Zm0 4h6v2H8v-2Zm0 4h6v2H8v-2Zm8.2-4.2 1.4 1.4-2.8 2.8-1.4-1.4 2.8-2.8Z" fill="currentColor" />
        </svg>
      );
    case "growthExperiments":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path d="M7 4h10v2l-3 4v5.5l2.5 2.5V20h-9v-2l2.5-2.5V10L7 6V4Z" fill="currentColor" />
        </svg>
      );
    case "insights":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path d="M4 18h16v2H4v-2Zm2-2h2V9H6v7Zm5 0h2V4h-2v12Zm5 0h2v-5h-2v5Z" fill="currentColor" />
        </svg>
      );
  }
}
