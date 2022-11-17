import { Pipe, PipeTransform } from '@angular/core';

// truncate <-
@Pipe({
  name: 'TruncateTextPipe'
})
export class TruncateTextPipe implements PipeTransform {

  // nie używasz args to wywal :)
  // typo
  // rozszerzyć o args
  // descriptionFormatter : 50 ---
  // asidhasidhsaiudhsaiudhd---
  transform(value: string, truncateAmount: number): string {
    const fomattedText = value.slice(0, truncateAmount);

    const amountOfTextLeft = Number(value.length) - Number(fomattedText.length);

    if (amountOfTextLeft > 0) {
      return `${fomattedText} (pozostały ${amountOfTextLeft} znaki opisu)`;
    }
    return fomattedText;
  };

};
