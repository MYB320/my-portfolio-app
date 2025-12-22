import {
  PhoneIcon,
  MapPinIcon,
  AtSignIcon,
  InfoIcon,
  CopyIcon,
  CheckIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "~/components/ui/item";

type ItemType = "phone" | "email" | "adress" | "info";

type InfoItemProps = {
  type: ItemType;
  title: string;
  content: string;
  isAction?: boolean;
};

function InfoTypeIcon({ type }: { type: ItemType }) {
  switch (type) {
    case "phone":
      return <PhoneIcon className="size-5" />;
    case "email":
      return <AtSignIcon className="size-5" />;
    case "adress":
      return <MapPinIcon className="size-5" />;
    case "info":
      return <InfoIcon className="size-5" />;
    default:
      return <InfoIcon className="size-5" />;
  }
}

export function ContactInfoItem({
  type,
  title,
  content,
  isAction,
}: InfoItemProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Item variant="muted">
      <ItemMedia>
        <InfoTypeIcon type={type} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{content}</ItemDescription>
      </ItemContent>
      {isAction && (
        <ItemActions>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="transition-colors text-primary"
          >
            {copied ? (
              <>
                <CheckIcon className="text-secondary" />
                <span className="text-secondary">Copied</span>
              </>
            ) : (
              <>
                <CopyIcon />
                Copy
              </>
            )}
          </Button>
        </ItemActions>
      )}
    </Item>
  );
}
