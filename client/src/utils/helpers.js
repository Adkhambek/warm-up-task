export function getCountdownDays(endDate) {
  const endDateObject = new Date(endDate);
  const currentDate = new Date();

  const timeDifference = endDateObject.getTime() - currentDate.getTime();

  const daysCountdown = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysCountdown;
}

export function truncateText(text, size) {
  return text.length > size ? text.slice(0, size - 1) + "…" : text;
}

export function formatNumberWithCommas(number) {
  const numberStr = number.toString();
  const [integerPart, decimalPart] = numberStr.split(".");

  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  const formattedNumber = decimalPart
    ? `${formattedIntegerPart}.${decimalPart}`
    : formattedIntegerPart;

  return formattedNumber;
}

export function formatCompactNumber(num) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(1).replace(rx, "$1") + item.symbol
    : "0";
}
