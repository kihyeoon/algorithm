# 연결된 정점들

## 문제

방향이 없는 간선들의 목록이 주어질 때, 연결된 정점의 컴포넌트(그룹들)가 몇 개인지 반환하는 함수를 작성하세요.

## 입력

인자 1: edges
2차원 Array 타입을 요소로 갖는 시작과 도착 정점이 담겨있는 배열들을 담고 있는 목록 (2차원 배열, 정수 요소)
ex) [[0, 1], [1, 2], [3, 4]]

## 출력

Number 타입을 리턴해야 합니다.
연결된 정점의 컴포넌트의 수를 숫자로 반환합니다.

## 주의 사항

주어진 간선은 무향입니다.
[1, 2] 는 정점 1에서 정점 2로도 갈 수 있으며, 정점 2에서 정점 1로도 갈 수 있습니다.

## 입출력 예시

```js
const result = connectedVertices([
  [0, 1],
  [2, 3],
  [4, 5],
]);
```

console.log(result); // 3
해당 정점들은 아래와 같은 모양을 하고 있습니다.
![img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/00cdd9c3-e67a-43f2-a218-e322f8f222bb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220922T152709Z&X-Amz-Expires=86400&X-Amz-Signature=b35348621042a14f9c42257903545f236d0bcae612a7391e7577ac4ec0cb9f15&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

```js
const result = connectedVertices([
  [0, 1],
  [2, 3],
  [3, 4],
  [3, 5],
]);
console.log(result); // 2
```

해당 정점들은 아래와 같은 모양을 하고 있습니다.
![img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1169aa6b-97bd-4ec5-bbdd-2cd7aadd336a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220922T152819Z&X-Amz-Expires=86400&X-Amz-Signature=7f423e05a5b52a921efb5c36c2623081138df1ddb003c252b33c2bcb65c537c2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
