import { NextResponse } from "next/server";

// Mock movies database
const movies = [
  {
    id: "1",
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseYear: 1994,
    genre: "Drama",
    posterUrl: "https://example.com/shawshank.jpg",
    rating: 9.3,
    views: 1000000,
  },
  {
    id: "2",
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    releaseYear: 1972,
    genre: "Crime",
    posterUrl: "https://example.com/godfather.jpg",
    rating: 9.2,
    views: 900000,
  },
];

export async function GET() {
  return NextResponse.json(movies);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newMovie = {
      id: String(movies.length + 1),
      ...body,
      views: 0,
    };

    movies.push(newMovie);
    return NextResponse.json(newMovie, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
