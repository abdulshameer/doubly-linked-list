function opposite(number) {
    if (number < 0)
    {
        number = Math.abs(number);
    }
    else
    {
        number = -(number);
    }
    return number;
}