class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, (_, i) => i);
        this.rank = Array(size).fill(1);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX] += 1;
            }
        }
    }
}

var regionsBySlashes = function(grid) {
    const n = grid.length;
    const uf = new UnionFind(4 * n * n);

    const getIndex = (i, j, k) => (i * n + j) * 4 + k;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const root = getIndex(i, j, 0);
            if (grid[i][j] === '/') {
                uf.union(root, root + 3);
                uf.union(root + 1, root + 2);
            } else if (grid[i][j] === '\\') {
                uf.union(root, root + 1);
                uf.union(root + 2, root + 3);
            } else {
                uf.union(root, root + 1);
                uf.union(root + 1, root + 2);
                uf.union(root + 2, root + 3);
            }

            if (i > 0) {
                uf.union(root, getIndex(i - 1, j, 2));
            }
            if (j > 0) {
                uf.union(root + 3, getIndex(i, j - 1, 1));
            }
        }
    }

    let regions = 0;
    for (let i = 0; i < 4 * n * n; i++) {
        if (uf.find(i) === i) {
            regions++;
        }
    }

    return regions;
};