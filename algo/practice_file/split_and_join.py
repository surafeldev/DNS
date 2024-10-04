def split_and_join(line):
    # Split the string by spaces
    words = line.split()

    # Join the split string with hyphens
    words = '-'.join(words)
    return words


if __name__ == "__main__":
    input_string = "this is a test"
    result = split_and_join(input_string)
    print(result)
