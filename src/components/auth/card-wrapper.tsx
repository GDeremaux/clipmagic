import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Social from "@/components/auth/social";
import BackButton from "@/components/auth/back-button";
import TextSeparator from "../text-separator";

interface CardWrapperProps {
	children: React.ReactNode;
  cardTitle: string;
	cardDescription: string;
	backButtonLabel: string;
	backButtonHref: string;
	showSocial?: boolean;
}

const CardWrapper = ({
	children,
  cardTitle,
	cardDescription,
	backButtonLabel,
	backButtonHref,
	showSocial
}: CardWrapperProps) => {
	return (
		<Card className="w-96 shadow-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">{cardTitle}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
      {showSocial && 
        <>
          <Social />
          <TextSeparator text="Or continue with" />
        </>
      }
        {children}
      </CardContent>
      <CardFooter>
        <BackButton
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
		</Card>
	)
}

export default CardWrapper;