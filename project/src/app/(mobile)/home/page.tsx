import Card from "@/features/home/components/card";
import { CARDS } from "@/features/home/utils/utils";

const profileIcon: JSX.Element = (
	<svg
		width="32"
		height="32"
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M16 29.3333C23.3638 29.3333 29.3334 23.3638 29.3334 16C29.3334 8.63616 23.3638 2.66663 16 2.66663C8.63622 2.66663 2.66669 8.63616 2.66669 16C2.66669 23.3638 8.63622 29.3333 16 29.3333Z"
			fill="#087889"
		/>
		<path
			d="M24 26.6666C24 24.5449 23.1571 22.5101 21.6569 21.0098C20.1566 19.5095 18.1217 18.6666 16 18.6666C13.8783 18.6666 11.8434 19.5095 10.3431 21.0098C8.84285 22.5101 8 24.5449 8 26.6666"
			fill="white"
		/>
		<path
			d="M16 18.6667C18.9455 18.6667 21.3334 16.2789 21.3334 13.3333C21.3334 10.3878 18.9455 8 16 8C13.0545 8 10.6667 10.3878 10.6667 13.3333C10.6667 16.2789 13.0545 18.6667 16 18.6667Z"
			fill="white"
		/>
	</svg>
);

export default function Home() {
	return (
		<>
			<div className="flex justify-between items-center gap-1 px-4 pt-28 pb-4">
				<div className="flex items-center gap-1">
					<h1 className="text-2xl font-bold text-secondary">John</h1>
					<span className="font-bold text-primary">
						+ Add patient
					</span>
				</div>
				{profileIcon}
			</div>
			<div className="flex flex-col gap-4 py-8 px-4 bg-white rounded-2xl">
				<h2 className="font-bold text-secondary">Get care</h2>
				<div className="flex flex-col gap-3">
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
			</div>
		</>
	);
}
