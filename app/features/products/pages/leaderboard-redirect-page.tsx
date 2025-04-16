import { data, redirect } from "react-router";
import type { Route } from "./+types/leaderboard-redirection-page";
import { DateTime } from "luxon";

export function loader({ params }: Route.LoaderArgs) {
  const { period } = params;
  let url: string;
  const today = DateTime.now().setZone("Asia/Seoul");
  if (period === "daily") {
    url = `/products/leaderboard/daily/${today.year}/${today.month}/${today.day}`;
  } else if (period === "weekly") {
    url = `/products/leaderboard/weekly/${today.year}/${today.weekNumber}`;
  } else if (period === "monthly") {
    url = `/products/leaderboard/monthly/${today.year}/${today.month}`;
  } else if (period === "yearly") {
    url = `/products/leaderboard/yearly/${today.year}`;
  } else {
    return data(null, { status: 400 });
  }
  return redirect(url);
}
