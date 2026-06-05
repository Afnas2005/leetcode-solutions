/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, color) {
    const originalColor = image[sr][sc];

    if (originalColor === color) {
        return image;
    }

    function dfs(row, col) {
        if (
            row < 0 ||
            row >= image.length ||
            col < 0 ||
            col >= image[0].length ||
            image[row][col] !== originalColor
        ) {
            return;
        }

        image[row][col] = color;

        dfs(row + 1, col); 
        dfs(row - 1, col); 
        dfs(row, col + 1); 
        dfs(row, col - 1); 
    }

    dfs(sr, sc);

    return image;
}