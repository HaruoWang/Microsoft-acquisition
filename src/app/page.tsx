"use client"

import { useLottie, useLottieInteractivity } from "lottie-react";
import showreel from "./showreel.json";
import game from "./game.json";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
 
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image"
import i1 from './public/1.webp'
import i2 from './public/2.webp'
import i3 from './public/3.webp'
import i4 from './public/4.webp'
import i5 from './public/5.webp'

const options = {
  animationData: showreel,
};

const Lottie3 = () => {
  const options = {
    animationData: game,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

const chartData = [
  { year: "00", USD: 1.4, name: "Visio" },
  { year: "07", USD: 6.3, name: "aQuantive" },
  { year: "11", USD: 8.5, name: "Skype" },
  { year: "13", USD: 7.2, name: "Nokia" },
  { year: "14", USD: 2.5, name: "Mojang" },
  { year: "16", USD: 26.2, name: "LinkedIn" },
  { year: "18", USD: 7.5, name: "GitHub" },
  { year: "20", USD: 8.1, name: "ZeniMax Media" },
  { year: "21", USD: 19.7, name: "Nuance Communications" },
  { year: "22", USD: 75.4, name: "Activision Blizzard" },
]
 
const chartConfig = {
  year: {
    label: "year",
    color: "#2563eb",
  },
  USD: {
    label: "USD",
    color: "#2563eb",
  },
  name: {
    label: "name",
  },
} satisfies ChartConfig

import { ScrollIndicator } from './ScrollIndicator'

export default function Home() {
  const view = useLottie(options);
  const Lottie2 = useLottieInteractivity({
    lottieObj: view,
    mode: "scroll",
    actions: [
      {
        visibility: [0.25, 0.75],
        type: "seek",
        frames: [0, 240],
      }
    ]
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="w-full text-5xl md:text-9xl lg:hover:font-['Cambria']">Microsoft's Top-10 Acquisitions</h1>
      <h2 className="text-right w-full text-sm md:text-4xl pt-4 pb-2 md:py-12">A visual insight into MSFT's big move</h2>
      <h3 className="text-right w-full text-xs md:text-2xl pb-5 md:pb-10">By <a href="https://haruowang.vercel.app" className="underline">Haruo Wang</a></h3>
      <div className="grid lg:grid-cols-2 grid-auto-rows-min">
        <div className="aspect-auto lg:aspect-square lg:self-center lg:col-start-2 lg:row-span-3 z-10">
          <DotLottieReact
            src="https://lottie.host/3c13807b-600c-46c5-8ce9-ae63185f7c61/ilx8J3RY6i.lottie"
            loop
            autoplay
          />
        </div>
        <div className="col-start-1">
          <p className="w-full text-xs md:text-lg first-letter:float-left first-letter:pr-2 first-letter:md:pt-1 first-letter:text-2xl first-letter:md:text-5xl pb-6 md:pb-12">Since 2000, Microsoft's acquisitions have become increasingly large in scale. E.g., the 2022 acquisition of Activision Blizzard came at more than twice the cost of LinkedIn. The deal was able to bypass antitrust probes from both FTC and CMA, largely thanks to president Brad Smith's strong ties with government bodies and the company's goodwill of transferring cloud gaming rights outside the EU to Ubisoft.</p>
          <p className="w-full text-xs md:text-lg first-letter:float-left first-letter:pr-2 first-letter:md:pt-1 first-letter:text-2xl first-letter:md:text-5xl pb-6 md:pb-12">Looking back at past major acquisitions, there have been notable missteps. For example, the $6.2 billion goodwill impairment on advertising company aQuantive nearly wiped out the entire investment. Nokia's fall from dominance in the mobile phone market, eventually being acquired by HMD and FIH Mobile, is another well-known tale. The decision to takeover GitHub also received mixed reputations from the open source community.</p>
          <p className="w-full text-xs md:text-lg first-letter:float-left first-letter:pr-2 first-letter:md:pt-1 first-letter:text-2xl first-letter:md:text-5xl pb-6 md:pb-12">Nonetheless, Microsoft has remained a dominant force in the tech industry. The complex relationship with OpenAI has reinvigorated the company, drawing fresh public attention. Meanwhile, its early investment in AI-driven healthcare corporation Nuance Communications is starting to show its effects. To better understand Microsoft's trajectory, I tidy up its top 10 acquisitions leading up to 2024. Let's dive in.</p>
        </div>
      </div>
      <div className="z-10 w-full">
        {Lottie2}
      </div>
      <h2 className="max-w-[840px] w-full text-3xl md:text-7xl py-6 md:py-12">Their Price</h2>
      <div className="grid gap-5 md:grid-cols-2 max-w-[840px] w-full pb-6 md:pb-12 pb-12 md:pb-24 z-10">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">
              Value of Top 10
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="aspect-[4/3] w-full py-2 md:py-4 m-auto">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  tickMargin={20}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 1)}
                />
                <YAxis
                  dataKey="USD"
                  tickLine={false}
                  tickMargin={15}
                  axisLine={false}
                  tickFormatter={(value) => "$" + value + "B"}
                />
                <ChartTooltip content={<ChartTooltipContent hideIndicator />} />
                <Bar dataKey="USD" fill="var(--color-USD)" radius={4}>
                  <LabelList
                    dataKey="year"
                    position="bottom"
                    offset={5}
                    className="fill-[--color-year]"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
            <CardDescription className="text-sm font-medium pt-2">
              Arranged by company and ordered by year
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">
              Inside the Chart
            </CardTitle>
          </CardHeader>
          <CardContent className="md:leading-[1.5rem] lg:leading-[2rem] md:py-2 lg:py-8">
            As you can see, there are currently only 3 cases exceeding the $10 billion mark. But among them, Microsoft claims the 1st, 7th, and 9th positions in the largest tech acquisitions to date, thanks to its purchases of Activision Blizzard, LinkedIn, and Nuance Communications.
            <CardDescription className="md:text-[#2563eb] lg:text-[#2563eb] text-sm font-medium pt-2 md:pt-4 lg:pt-7">
              The tech M&A market hit $1.24T worldwide in 2021
            </CardDescription>          
          </CardContent>
        </Card>
      </div>
      <h2 className="w-full text-3xl md:text-9xl pb-6 md:pb-24">MSFT prefers acquiring video game companies as subsidiaries</h2>
      <div className="z-10">
        <Lottie3 />
      </div>
      <h2 className="max-w-[840px] w-full text-3xl md:text-7xl py-6 md:py-12">Their Keyword</h2>
      <div className="grid gap-5 md:grid-cols-2 max-w-[840px] w-full pb-12 md:pb-24 z-10">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Video Game
            </CardTitle>
            <svg className="h-6 w-6 text-muted-foreground" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
              <path d="M128.341 0L217.682 256H168.89L156.802 223.418H99.8965L87.7922 256H39L128.341 0ZM140.869 176.743L127.347 132.057L113.842 176.743H140.869Z" fill="#2563eb"/>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">Activision Blizzard</div>
            <p className="text-xs text-muted-foreground pt-2">
              #Diablo #StarCraft #Hearthstone
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Social Media
            </CardTitle>
            <svg className="h-6 w-6 text-muted-foreground" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
              <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#2563eb"/>
            </svg>        
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">LinkedIn</div>
            <p className="text-xs text-muted-foreground pt-2">
              #Career #Networking #B2B
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Conversational AI
            </CardTitle>
            <svg className="h-6 w-6 text-muted-foreground" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
              <path d="M182.586 164.998C164.707 164.057 148.703 158.409 133.647 149.941C117.646 141.471 110.119 135.822 109.175 134.884V138.648C108.235 139.589 112.942 145.237 121.412 155.589C129.883 165.942 143.058 176.297 160.003 186.647C176.941 197.002 197.646 202.647 223.058 203.588H246.586C252.234 202.647 255.059 199.825 256 195.117V133C255.059 127.352 252.234 124.529 246.586 123.588H182.589L182.586 164.998ZM147.76 121.707V118.881L133.644 101.94C125.173 91.5872 112.939 80.2939 95.9975 69.9414C78.1123 59.589 57.4074 53.9409 32.9391 53H9.41158C3.76348 53.9409 0.940869 56.7664 0 61.4736V123.588C0.940869 129.236 3.76348 132.059 9.41158 133H73.4109V91.5872C91.2931 92.528 107.294 98.1761 122.35 106.647L147.76 121.707Z" fill="#2563eb"/>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">Nuance Communications</div>
            <p className="text-xs text-muted-foreground pt-2">
              #DAXcopilot #MONAI #Dragon
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Telecom
            </CardTitle>
            <svg className="h-6 w-6 text-muted-foreground" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
              <path d="M247.813 128.126C247.79 133.408 247.406 138.68 246.66 143.908C262.585 173.454 257.235 209.949 233.502 233.682C209.767 257.417 173.273 262.766 143.727 246.842C138.499 247.587 133.225 247.972 127.945 247.994C61.7443 247.994 8.0773 194.328 8.0773 128.126C8.1003 122.845 8.4853 117.573 9.2303 112.345C-6.6937 82.7979 -1.3447 46.3039 22.3893 22.5709C46.1223 -1.16409 82.6173 -6.51309 112.164 9.41091C117.392 8.66591 122.665 8.28091 127.945 8.25891C159.736 8.25891 190.225 20.8877 212.704 43.3671C235.184 65.8465 247.813 96.3351 247.813 128.126ZM80.1587 96.2086C80.013 102.198 81.4177 108.123 84.2367 113.409C87.1397 118.385 91.3207 121.922 96.1167 125.112C102.531 129.246 109.331 132.75 116.421 135.574C124.311 138.943 130.517 141.691 134.861 143.997C138.545 145.862 141.899 148.318 144.791 151.267C147.035 153.665 148.245 156.849 148.16 160.133C148.262 162.361 147.823 164.581 146.882 166.604C145.94 168.626 144.523 170.39 142.752 171.747C138.062 174.919 132.44 176.418 126.794 176.003C123.604 176.062 120.418 175.734 117.307 175.027C114.785 174.496 112.321 173.724 109.948 172.722C107.798 171.926 105.292 170.701 102.172 169.176C101.817 169.002 101.453 168.825 101.082 168.644C98.1498 167.117 94.9012 166.297 91.5957 166.25C88.6392 166.107 85.744 167.126 83.5277 169.088C82.4602 170.092 81.6283 171.321 81.0918 172.685C80.5553 174.049 80.3275 175.515 80.4247 176.978C80.371 179.754 81.176 182.479 82.7297 184.78C84.7039 187.221 87.2243 189.165 90.0877 190.454C101.265 195.294 113.378 197.596 125.552 197.192C134.456 197.37 143.318 195.928 151.707 192.937C158.8 190.532 164.987 186.015 169.439 179.992C173.777 173.73 175.985 166.238 175.734 158.625C175.896 152.409 174.33 146.271 171.212 140.893C168.04 135.765 163.77 131.405 158.711 128.126C152.361 124.085 145.618 120.699 138.585 118.019L136.28 117.133C128.833 114.118 123.602 111.724 119.967 109.951C116.65 108.414 113.645 106.28 111.101 103.656C109.021 101.453 107.877 98.529 107.909 95.4996C107.793 93.1707 108.309 90.8537 109.401 88.7935C110.493 86.7334 112.122 85.0066 114.115 83.7956C118.85 81.0632 124.256 79.7122 129.72 79.8956C133.935 79.8281 138.141 80.3347 142.22 81.4016C146.605 82.6816 150.9 84.2516 155.076 86.1016C156.803 86.8906 158.674 87.3131 160.573 87.3426C161.929 87.384 163.278 87.1367 164.532 86.6171C165.785 86.0975 166.914 85.3174 167.843 84.3286C168.838 83.2431 169.609 81.9715 170.111 80.5868C170.614 79.2022 170.837 77.7319 170.769 76.2606C170.806 73.4542 169.795 70.7349 167.932 68.6356C165.492 66.0192 162.447 64.0406 159.066 62.8726C155.342 61.5771 151.516 60.5983 147.628 59.9466C142.175 59.0826 136.659 58.6666 131.138 58.7056C122.714 58.6599 114.346 60.0696 106.402 62.8726C99.0891 65.3458 92.549 69.6856 87.4287 75.4626C82.5623 81.2633 79.9776 88.6392 80.1587 96.2086Z" fill="#2563eb"/>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">Skype</div>
            <p className="text-xs text-muted-foreground pt-2">
              #Concall #SkypeCredit #eBay
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Video Game
            </CardTitle>
            <svg className="h-6 w-6 text-muted-foreground" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
              <path d="M14 256H242.755V190.384H116.904L237.021 57.3737V0H20.8113V65.6212H133.04L14 194.328V256Z" fill="#2563eb"/>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">ZeniMax Media</div>
            <p className="text-xs text-muted-foreground pt-2">
              #Wolfenstein #Quake #Dishonored
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Version Control
            </CardTitle>
            <svg className="h-6 w-6 text-muted-foreground" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
              <path d="M128.001 3C57.317 3 0 60.307 0 131.001C0 187.555 36.676 235.536 87.535 252.461C93.932 253.646 96.281 249.684 96.281 246.303C96.281 243.251 96.161 233.168 96.107 222.473C60.497 230.215 52.983 207.37 52.983 207.37C47.16 192.575 38.77 188.64 38.77 188.64C27.157 180.696 39.646 180.86 39.646 180.86C52.499 181.762 59.267 194.05 59.267 194.05C70.684 213.618 89.212 207.961 96.516 204.69C97.665 196.418 100.982 190.77 104.643 187.574C76.212 184.338 46.325 173.362 46.325 124.316C46.325 110.341 51.325 98.922 59.513 89.958C58.184 86.734 53.803 73.716 60.753 56.084C60.753 56.084 71.502 52.644 95.963 69.205C106.173 66.369 117.123 64.947 128.001 64.898C138.879 64.947 149.838 66.368 160.067 69.205C184.498 52.645 195.232 56.085 195.232 56.085C202.199 73.715 197.816 86.735 196.487 89.958C204.694 98.922 209.66 110.341 209.66 124.316C209.66 173.479 179.716 184.304 151.213 187.473C155.804 191.445 159.895 199.235 159.895 211.177C159.895 228.303 159.747 242.087 159.747 246.303C159.747 249.71 162.051 253.701 168.539 252.443C219.37 235.5 256 187.537 256 131.002C256 60.307 198.691 3 128.001 3Z" fill="#2563eb"/>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">GitHub</div>
            <p className="text-xs text-muted-foreground pt-2">
              #Developer #Git #OpenSource
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Mobile Phone
            </CardTitle>
            <svg className="h-6 w-6 text-muted-foreground" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
              <path d="M54.313 219.924H0V37H93.9074L201.687 173.558V37H256V219.924H163.974L54.313 81.0147V219.924Z" fill="#2563eb"/>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">Nokia</div>
            <p className="text-xs text-muted-foreground pt-2">
              #Finland #3310 #PatentLicensing
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Digital Marketing
            </CardTitle>
            <svg className="h-6 w-6 text-muted-foreground" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
              <path d="M119.132 26.0479L114.335 26.047C104.579 26.0453 92.8184 28.5826 83.3663 39.465C73.7803 50.5015 65.8658 70.9097 65.8658 108.296C65.8658 145.722 73.364 166.529 82.5101 177.915C91.4903 189.095 102.598 191.843 111.738 191.843L116.533 191.844V217.998L110.862 216.944C94.999 213.998 71.4346 205.103 51.7412 187.874C31.9152 170.529 16 144.697 16 108.296C16 71.8361 32.4017 46.1988 52.7959 29.1357C73.0496 12.1902 97.2688 3.64382 113.548 0.930697L119.132 0V26.0479Z" fill="#2563eb"/>
              <path d="M136.823 0L142.407 0.930697C158.686 3.64382 182.905 12.1902 203.159 29.1357C223.553 46.1988 239.954 71.8361 239.954 108.296C239.954 160.247 207.666 190.378 178.042 205.432C183.003 209.014 189.361 213.123 195.962 216.535C200.848 219.061 205.734 221.134 210.191 222.354C214.722 223.593 218.367 223.826 221.004 223.167C225.905 221.941 230.339 223.854 232.988 227.337C235.544 230.698 236.334 235.305 235.058 239.741C232.389 249.023 221.721 256 202.679 256C196.752 256 190.597 254.07 184.731 251.269C179.162 248.61 173.587 245.037 168.332 241.133L139.421 217.998V191.844L144.217 191.843C153.357 191.843 164.464 189.095 173.444 177.915C182.591 166.529 190.089 145.722 190.089 108.296C190.089 70.9097 182.174 50.5015 172.588 39.465C163.136 28.5826 151.376 26.0453 141.619 26.047L136.823 26.0479V0Z" fill="#2563eb"/>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">aQuantive</div>
            <p className="text-xs text-muted-foreground pt-2">
              #Razorfish #AtlasSolutions #DrivePM
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Video Game
            </CardTitle>
            <svg className="h-6 w-6 text-muted-foreground" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
              <path d="M0.0817211 127.638C0.0817211 93.9418 0.0881521 60.2459 0.101016 26.5499C0.120272 14.7371 0.775075 14.074 12.4601 14.0628C71.3814 14.0067 130.303 13.9882 189.224 14.0073C197.686 14.0089 198.928 15.3266 199.066 23.9488C199.164 30.0742 199.003 36.2069 199.23 42.3263C199.153 46.001 199.806 49.6544 201.149 53.0757C202.492 56.4969 204.5 59.6182 207.056 62.2592C209.612 64.9003 212.666 67.0088 216.042 68.463C219.418 69.9172 223.048 70.6883 226.723 70.7318C233.53 71.2017 240.387 70.8979 247.219 71.0444C254.597 71.2025 255.633 72.2952 255.931 79.8281C255.978 81.0049 255.982 82.184 255.983 83.3621C255.994 131.667 256 179.972 256 228.277C255.993 241.464 255.795 241.619 242.494 241.662C232.123 241.696 221.753 241.68 211.383 241.614C199.227 241.529 198.94 241.243 198.935 229.376C198.917 183.191 198.912 137.007 198.921 90.822C198.921 89.1725 198.963 87.5216 198.908 85.8739C199.053 83.9202 198.776 81.9582 198.096 80.1208C197.417 78.2834 196.35 76.6135 194.969 75.2245C193.587 73.8354 191.923 72.7595 190.09 72.0698C188.256 71.3801 186.295 71.0926 184.341 71.2268C179.867 71.0954 175.381 71.0968 170.909 71.2693C169.013 71.1917 167.121 71.5076 165.353 72.1972C163.585 72.8868 161.979 73.935 160.636 75.2759C159.293 76.6168 158.242 78.2213 157.55 79.9883C156.857 81.7553 156.539 83.6466 156.613 85.5429C156.469 88.128 156.526 90.7255 156.524 93.3173C156.507 118.53 156.492 143.743 156.481 168.956C156.479 171.784 156.554 174.618 156.386 177.437C156.078 182.591 154.569 184.47 149.606 184.533C135.232 184.716 120.857 184.706 106.48 184.502C101.486 184.425 99.9865 182.503 99.6328 177.412C99.486 175.3 99.5571 173.173 99.5548 171.052C99.5242 144.189 99.4938 117.327 99.4637 90.4644C99.5493 88.1098 99.4804 85.7521 99.2573 83.4065C98.9476 80.1984 97.4876 77.2106 95.1469 74.9949C92.8062 72.7792 89.7429 71.4853 86.5225 71.352C81.1097 71.0344 75.6827 71.0381 70.2703 71.3631C68.5498 71.3633 66.8466 71.7059 65.2599 72.3712C63.6733 73.0364 62.2349 74.0109 61.0288 75.2377C59.8227 76.4646 58.8729 77.9194 58.2348 79.5172C57.5968 81.1149 57.2832 82.8238 57.3124 84.544C57.0726 89.7183 57.1749 94.9096 57.1705 100.093C57.1337 142.979 57.1026 185.865 57.077 228.751C57.0756 230.636 57.1488 232.528 57.0131 234.404C56.6436 239.514 55.1397 241.437 50.1472 241.502C35.7742 241.689 21.3993 241.663 7.02237 241.427C1.93488 241.342 0.523361 239.551 0.119983 234.378C-0.0628821 232.034 0.0177952 229.668 0.0173435 227.312C0.0123347 194.087 0.0112 160.862 0.0139371 127.638L0.0817211 127.638Z" fill="#2563eb"/>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">Mojang</div>
            <p className="text-xs text-muted-foreground pt-2">
              #Sweden #Minecraft #AccountMigration
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Diagramming 
            </CardTitle>
            <svg className="h-6 w-6 text-muted-foreground" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
              <path d="M5 1.19163e-06L96.2157 256H165.522L251.654 1.19163e-06H167.778L133.888 112.766L91.0043 1.19163e-06" fill="#2563eb"/>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">Visio</div>
            <p className="text-xs text-muted-foreground pt-2">
              #Microsoft365 #BPMN #UML
            </p>
          </CardContent>
        </Card>
      </div>
      <h2 className="w-full text-3xl md:text-9xl pb-6 md:pb-24">Primary sources of its revenue are AI Cloud, Biz, and PC</h2>
      <h2 className="max-w-[840px] w-full text-3xl md:text-7xl py-6 md:py-12">Their Meme</h2>
      <div className="max-w-[840px] w-full pb-12 md:pb-24 z-10">
        <Carousel
        opts={{
          align: "start",
          loop: true,
        }}>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2">
              <Image
                src={i1}
                alt="Nokia"
                width={420}
                height={420}
                className="m-auto"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2">
              <Image
                src={i2}
                alt="LinkedIn"
                width={420}
                height={420}
                className="m-auto"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2">
              <Image
                src={i3}
                alt="Skype"
                width={420}
                height={420}
                className="m-auto"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2">
              <Image
                src={i4}
                alt="GitHub"
                width={420}
                height={420}
                className="m-auto"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2">
              <Image
                src={i5}
                alt="MicroSoft"
                width={420}
                height={420}
                className="m-auto"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <ScrollIndicator />
    </main>
  );
}