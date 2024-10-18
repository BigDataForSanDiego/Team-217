import Card from "@/features/home/components/card";
import { CARDS } from "@/features/home/utils/utils";

export default function Home() {
	return (
		<div className="flex flex-col gap-3 py-8 px-4 bg-white rounded-2xl">
			{CARDS.map((card) => {
				return (
					<Card
						key={card.title}
						title={card.title}
						subtitle={card.subtitle}
						imagePath={card.imagePath}
						isNew={card.isNew}
					/>
				);
			})}
		</div>
	);
}
