import { ChevronRight } from "lucide-react";
import { CardInfo } from "../types/types";

export default function Card({
	title,
	subtitle,
	imagePath,
	isNew = false,
}: CardInfo) {
	return (
		<button className="bg-primaryLight flex gap-2 h-24 w-full px-4 justify-between items-center rounded-2xl">
			<div className="flex flex-col gap-1">
				<div className="flex items-center gap-1">
					<h3 className="text-primary font-bold">{title}</h3>
					<ChevronRight className="stroke-primary h-5 w-5" />
					{isNew && (
						<div className="px-3 py-1 text-white font-bold text-xs bg-primary rounded-full">
							NEW!
						</div>
					)}
				</div>
				<span className="text-secondary text-sm font-medium text-left">
					{subtitle}
				</span>
			</div>
			<img
				className="w-16 h-16 aspect-square"
				src={imagePath}
				alt="icon"
			/>
		</button>
	);
}
