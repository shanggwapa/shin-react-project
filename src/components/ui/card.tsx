import { Button } from "@/components/ui/button";

type CardProps = {
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonVariant?: "primary" | "secondary" | "tertiary";
  imagePosition?: "top";
};

export function Card({
  image,
  title,
  description,
  buttonLabel,
  buttonVariant = "primary",
}: CardProps) {
  return (

    <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
      
      <img
        src={image}
        alt={title}
        className="w-full h-150 object-cover"
      />
        <div className="p-10 space-y-4">
        <h2 className="text-3xl text-purple-900 font-bold">{title}</h2>

        <p className="text-xl text-purple-900 text-lg leading-relaxed">
          {description}
        </p>

        <Button variant={buttonVariant}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}