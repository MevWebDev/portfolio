interface scrollProps {
  target: string;
  offset?: number;
}

export function scrollToTarget({ target }: scrollProps) {
  const targetElement = document.getElementById(target);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
