const HeroLights = () => (
    <>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 10, 7]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-6, 4, -4]} intensity={0.8} color="#4466cc" />
        <directionalLight position={[0, -5, -8]} intensity={0.5} color="#2255aa" />
        <spotLight
            position={[0, 20, 10]}
            angle={0.35}
            penumbra={0.5}
            intensity={60}
            color="#4488ff"
            target-position={[0, -2, 0]}
        />
    </>
)

export default HeroLights
