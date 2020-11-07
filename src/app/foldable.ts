export abstract class Foldable {
	animState: string = 'unloaded';
	expandButtonText: string = '+';
	unfold: boolean = false;

	expandButtonClick(): void {
		this.unfold = !this.unfold;
		this.unfold ? this.expandButtonText = '-' : this.expandButtonText = '+';
		this.unfold ? this.animState = 'unfold' : this.animState = 'mini';
	}
}
