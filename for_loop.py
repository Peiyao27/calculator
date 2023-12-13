a = [1, 2, 3, 4, 5, 6]
b = [6, 7, 8, 9, 10]

z = []

for i in range(len(a)):
    for j in range(len(b)):
        z.append(a[i]*b[j])
    print(z[(len(b)*i):(len(b)*i+len(a))])
    print((len(a)*i), (len(a)*i+len(b)))
print(len(z))
