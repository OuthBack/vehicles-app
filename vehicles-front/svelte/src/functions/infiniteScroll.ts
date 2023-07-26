type InfiniteScrollType = {
	fetch: () => void;
	element: HTMLElement | null;
};

export const infiniteScroll = ({ fetch, element }: InfiniteScrollType) => {
	if (element) {
		const observer = new IntersectionObserver(
			(entries) => {
				const first = entries[0];
				if (first.isIntersecting) {
					fetch();
				}
			},
			{ threshold: 1 }
		);
		observer.observe(element); //Element of DOM
	}
};
