export class Util {
    public static fadeIn(element: HTMLElement, speed: number = 300): void {
        element.style.display = 'block';
        element.animate(
            { opacity: [0, 1] },
            { duration: speed, }
        );
    }

    public static fadeOut(element: HTMLElement, speed: number = 300): Promise<void> {
        const animation = element.animate(
            { opacity: [1, 0] },
            { duration: speed, }
        );

        return new Promise<void>((resolve) => {
            animation.onfinish = () => {
                element.style.display = 'none';
                resolve();
            };
        });
    }
}
