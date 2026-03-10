
import Link from "next/link"

export default function Task2() {

  return (
    <div className="bg-[#0b1535] h-screen text-white flex items-center relative overflow-hidden">
      <div className="absolute right-5 top-1 underline z-100"><Link href="/" >Navigate to Task 1</Link></div>
      {/* dot background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#4f5bff_1px,transparent_1px)] [background-size:20px_20px]" />
      <figure className="relative grid grid-cols-[152px_auto_152px] w-fit max-w-250 mx-auto overflow-hidden">

        <svg className="absolute z-0 align-middle" width="1000" height="386" aria-hidden="true" viewBox="0 0 1000 386" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1000 194H0" stroke="#5D64FE" strokeDasharray="2 2" vectorEffect="non-scaling-stroke"></path></svg>
        <svg className="absolute z-0 align-middle left-1/2 -translate-x-1/2 bottom-0" width="191" height="102" viewBox="0 0 191 102" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="developer-systems-animation__psp-connection-path developer-systems-animation__psp-connection-path--active" d="M81.0576 0.342323C81.0576 13.3582 81.0576 11.8288 81.0576 18.4909C81.0576 22.9092 77.4759 26.4913 73.0577 26.4913L28.511 26.4915C24.0927 26.4916 20.511 30.0733 20.511 34.4915L20.511 59.9819" stroke="#5D64FE" strokeDasharray="120"></path><path className="developer-systems-animation__psp-connection-path developer-systems-animation__psp-connection-path--active" d="M90.5 -4.19617e-05L90.5 41.1113C90.5 45.5393 86.9031 49.125 82.4751 49.1113L78.5874 49.0992C74.1594 49.0854 70.5625 52.6712 70.5625 57.0992L70.5625 59.938" stroke="#5D64FE" strokeDasharray="120"></path><path className="developer-systems-animation__psp-connection-path developer-systems-animation__psp-connection-path--active" d="M100.5 -4.19617e-05L100.5 41.1113C100.5 45.5393 104.097 49.125 108.525 49.1113L112.413 49.0992C116.841 49.0854 120.437 52.6712 120.437 57.0992L120.437 59.938" stroke="#5D64FE" strokeDasharray="120"></path><path className="developer-systems-animation__psp-connection-path" d="M109.942 0.342323C109.942 13.3582 109.942 11.8288 109.942 18.4909C109.942 22.9092 113.524 26.4913 117.942 26.4913L162.489 26.4915C166.907 26.4916 170.489 30.0733 170.489 34.4915L170.489 59.9819" stroke="#5D64FE" strokeDasharray="120"></path><path d="M90.5 -4.19617e-05L90.5 41.1113C90.5 45.5393 86.9031 49.125 82.4751 49.1113L78.5874 49.0992C74.1594 49.0854 70.5625 52.6712 70.5625 57.0992L70.5625 59.938" stroke="#152460" strokeDasharray="2 2"></path><path d="M100.5 -4.19617e-05L100.5 41.1113C100.5 45.5393 104.097 49.125 108.525 49.1113L112.413 49.0992C116.841 49.0854 120.437 52.6712 120.437 57.0992L120.437 59.938" stroke="#152460" strokeDasharray="2 2"></path><path d="M81.0576 0.342323C81.0576 13.3582 81.0576 11.8288 81.0576 18.4909C81.0576 22.9092 77.4759 26.4913 73.0577 26.4913L28.511 26.4915C24.0927 26.4916 20.511 30.0733 20.511 34.4915L20.511 59.9819" stroke="#152460" strokeDasharray="2 2"></path><path d="M109.942 0.342323C109.942 13.3582 109.942 11.8288 109.942 18.4909C109.942 22.9092 113.524 26.4913 117.942 26.4913L162.489 26.4915C166.907 26.4916 170.489 30.0733 170.489 34.4915L170.489 59.9819" stroke="#152460" strokeDasharray="2 2"></path></svg>
  
        <div className="flex items-center">
          <div className="relative grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr] p-2 gap-2 bg-[#122054]  rounded-md">
            <LeftBox label="1" />
            <LeftBox label="2" />
            <LeftBox label="3" />
            <LeftBox label="4" />
            <LeftBox label="5" />
            <LeftBox label="6" />
          </div>
        </div>
        <div className="max-w-2xl mx-auto relative z-10 grid grid-rows-[48px_75px_136px_32px_98px] ">


          {/* Top systems */}
          <div className="flex  justify-center w-full  mx-auto h-12  gap-2">
            <div className="flex flex-row p-2 gap-2 bg-[#122054]  rounded-md" >

              <div className="grid grid-cols-[auto_auto_auto] gap-2">
                <TextBox label="ERP" />
                <TextBox label="CRM" />
                <TextBox label="Subscriptions" />
              </div>

              <div className="grid grid-cols-[1fr_1fr] gap-2">
                <TextBox label="Legacy billing" />
                <TextBox label="Booking system" />
              </div>

            </div>
          </div>

          <div className="relative flex justify-center gap-2  ">
            <svg className="z-0" width="313" height="215" aria-hidden="true" viewBox="0 0 313 215" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0V96.976C1 101.395 4.582 104.976 9 104.976H118.527H148.372C152.79 104.976 156.372 108.558 156.372 112.976V214.258" stroke="#5D64FE" strokeDasharray="2 2"></path><path d="M311.671 0V96.976C311.671 101.395 308.09 104.976 303.671 104.976H194.144H164.3C159.882 104.976 156.3 108.558 156.3 112.976V114.258" stroke="#5D64FE" strokeDasharray="2 2"></path></svg>
            <div className=" grid  grid-cols-[repeat(2,308px)] absolute bottom-0">
              <Box label="SDK" />
              <Box label="Event Destinations" />
            </div>
          </div>

          <div className="relative flex justify-between items-center px-9 top-auto right-auto bottom-auto left-auto">
            <BoxWithIcon label="App Marketplace" />
            <BoxPipeLine label="Data Pipeline" />

          </div>


          {/* stripe */}
          <div className="absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[75%]">
            <div className=" w-20 h-20 flex items-center justify-center rounded-md  bg-[linear-gradient(288.31deg,#0d1738_-6.87%,#4032c8_105.95%)] font-bold text-lg shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="17" fill="none" viewBox="0 0 42 17"><path fill="#fefeff" fillRule="evenodd" d="M41.751 9.711h-5.643c.129 1.312 1.119 1.733 2.242 1.733 1.145 0 2.067-.249 2.832-.647v2.256c-.783.484-1.818.753-3.196.753-2.807 0-4.775-1.708-4.775-5.085 0-2.852 1.669-5.117 4.411-5.117 2.739 0 4.168 2.23 4.168 5.098 0 .271-.026.858-.039 1.01m-4.147-3.824c-.72 0-1.522.495-1.522 1.757h2.98c0-1.26-.75-1.757-1.458-1.757m-8.936 7.919c-1.008 0-1.625-.414-2.039-.708l-.006 3.146-2.883.596V3.79h2.627l.06.692c.423-.36 1.129-.878 2.259-.878 2.024 0 3.93 1.771 3.93 5.032 0 3.558-1.885 5.17-3.948 5.17m-.671-7.722c-.662 0-1.076.235-1.377.555l.017 4.162c.28.294.684.53 1.36.53 1.066 0 1.78-1.126 1.78-2.634 0-1.465-.726-2.613-1.78-2.613M19.765 3.79h2.894v9.816h-2.894zm0-3.193L22.659 0v2.284l-2.894.597zm-3.021 6.354v6.655h-2.88V3.79h2.58l.092.828c.702-1.205 2.15-.961 2.535-.827v2.574c-.367-.115-1.603-.291-2.327.586m-5.987 3.21c0 1.652 1.82 1.138 2.189.994v2.28c-.385.205-1.081.371-2.023.371-1.711 0-2.995-1.224-2.995-2.882l.013-8.96 2.814-.581.002 2.407h2.19v2.388h-2.19v3.984m-3.435.479c0 2.016-1.617 3.166-4.014 3.166A8 8 0 0 1 .19 13.17v-2.673c.968.51 2.166.894 3.12.894.644 0 1.072-.167 1.072-.685C4.382 9.37 0 9.873 0 6.773c0-1.983 1.593-3.17 3.932-3.17.954 0 1.91.143 2.864.513v2.637c-.877-.46-1.99-.72-2.867-.72-.604 0-1.013.17-1.013.607 0 1.26 4.406.66 4.406 4" clipRule="evenodd"></path></svg>
            </div>
          </div>

          <div className="flex justify-center">
            <Box label="Orchestration" />
          </div>


          {/* Bottom */}
          <div className="flex gap-2 flex-wrap justify-center items-end">
            <SmallBox label="PSP" />
            <SmallBox label="PSP" />
            <SmallBox label="PSP" />
            <SmallBox label="PSP" />

          </div>

        </div>
        <div className="flex justify-end items-center">
          <RightBox/>
        </div>
      </figure>
    </div>
  )
}


function TextBox({ label }: { label: string }) {
  return (
    <div className="h-8 px-4 py-2 rounded-md bg-[#2c2484] text-sm font-medium">
      <div>{label}</div>
    </div>
  )
}

function Box({ label }: { label: string }) {
  return (
    <div className="flex items-center px-4 py-1.5 rounded-sm bg-[#533afd] text-sm h-8 font-medium shadow w-fit mx-auto">
      <div>{label}</div>
    </div>
  )
}


function BoxPipeLine({ label }: { label: string }) {
  return (
    <div className="flex items-center px-4 py-1.5 rounded-sm bg-[#533afd] text-sm h-8 font-medium shadow w-fit">
      <div>{label}</div>
    </div>
  )
}

function BoxWithIcon({ label }: { label: string }) {
  return (
    <div className="flex  items-center px-4 py-1.5 rounded-sm bg-[#533afd] text-sm h-8 font-medium shadow w-fit ">
      <div className="inline-flex gap-2 items-center">{label}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M2.25 3a.75.75 0 0 0-.75.75v6c0 .41.34.75.75.75h6c.41 0 .75-.34.75-.75v-1.5a.75.75 0 1 1 1.5 0v1.5c0 1.24-1 2.25-2.25 2.25h-6C1.01 12 0 11 0 9.75v-6C0 2.51 1 1.5 2.25 1.5h1.5a.75.75 0 1 1 0 1.5h-1.5Z" fill="#F2F7FE"></path><path d="M7 0a.75.75 0 1 0 0 1.5h2.44L3.72 7.22a.75.75 0 0 0 1.06 1.06l5.72-5.72V5A.75.75 0 0 0 12 5V.75a.75.75 0 0 0-.75-.75H7Z" fill="#F2F7FE"></path></svg>
      </div>
    </div>
  )
}

function SmallBox({ label }: { label: string }) {
  return (
    <div className="flex justify-center items-center p-4 w-10 h-10 bg-[#2c2484] font-medium rounded-md text-sm">
      {label}
    </div>
  )
}

function LeftBox({ label }: { label: string }) {
  return (
    <div className="flex justify-center items-center  w-10 h-10 bg-[#2c2484] rounded-md text-sm">
      <div className="w-full h-full"><img src={`/images/l${label}.svg`} alt="Azure" /></div>
    </div>
  )
}

function RightBox() {
  return (
    <div className="flex justify-center items-center z-1 w-10 h-10 bg-[#2c2484] rounded-md text-sm">
      <div className="w-full h-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect width="40" height="40" fill="#fff" rx="4"></rect><path fill="url(#azure-blob-storage-mask-a-:r3gq:)" d="M15.491 8h7.537L15.204 31.182a1.334 1.334 0 0 1-1.138.818H8.2c-.19 0-.378-.046-.547-.133a1.334 1.334 0 0 1-.427-.367 1.334 1.334 0 0 1-.212-.522 1.334 1.334 0 0 1 .05-.561L14.352 8.818c.08-.238.234-.446.438-.592.204-.147.45-.226.701-.226Z"></path><path fill="#0078D4" d="M26.443 23.55H14.492a.667.667 0 0 0-.516.35.667.667 0 0 0 .137.608l7.68 7.168c.224.209.518.324.824.324h6.768l-2.942-8.45Z"></path><path fill="url(#azure-blob-storage-mask-a-:r3gr:)" d="M15.49 8a1.334 1.334 0 0 0-1.141.834L7.071 30.397a1.334 1.334 0 0 0 .149 1.096c.11.157.258.285.429.374.17.088.36.134.552.133h6.017c.224-.04.433-.139.607-.286.173-.148.304-.339.38-.553l1.451-4.277 5.184 4.835c.218.18.49.28.772.282h6.742l-2.957-8.45-8.62.001L23.055 8H15.49Z"></path><path fill="url(#azure-blob-storage-mask-a-:r3gs:)" d="M25.118 8.817a1.334 1.334 0 0 0-1.137-.817h-8.4c.251 0 .496.079.7.226.204.146.357.353.437.591l7.29 21.599c.06.18.078.373.05.561a1.334 1.334 0 0 1-.212.522 1.334 1.334 0 0 1-.427.368c-.17.087-.358.132-.548.132h8.4c.19 0 .378-.045.548-.132.17-.087.316-.214.427-.368.11-.154.183-.333.212-.522a1.334 1.334 0 0 0-.05-.561L25.118 8.817Z"></path><defs><linearGradient id="azure-blob-storage-mask-a-:r3gq:" x1="18.238" x2="10.411" y1="9.779" y2="32.903" gradientUnits="userSpaceOnUse"><stop stopColor="#114A8B"></stop><stop offset="1" stopColor="#0669BC"></stop></linearGradient><linearGradient id="azure-blob-storage-mask-a-:r3gr:" x1="20.683" x2="18.872" y1="20.555" y2="21.167" gradientUnits="userSpaceOnUse"><stop stopOpacity=".3"></stop><stop offset=".071" stopOpacity=".2"></stop><stop offset=".321" stopOpacity=".1"></stop><stop offset=".623" stopOpacity=".05"></stop><stop offset="1" stopOpacity="0"></stop></linearGradient><linearGradient id="azure-blob-storage-mask-a-:r3gs:" x1="19.687" x2="28.28" y1="9.104" y2="31.995" gradientUnits="userSpaceOnUse"><stop stopColor="#3CCBF4"></stop><stop offset="1" stopColor="#2892DF"></stop></linearGradient></defs></svg>
      </div>
    </div>
  )
}