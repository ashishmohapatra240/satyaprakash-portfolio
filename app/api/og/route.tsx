import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        // Get parameters from URL
        const title = searchParams.get('title') || 'Satyaprakash - Product Designer';
        const description = searchParams.get('description') || 'Building products & design systems';

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#ffffff',
                        backgroundImage: 'linear-gradient(45deg, #f8fafc 0%, #f1f5f9 100%)',
                        position: 'relative',
                    }}
                >
                    {/* Background Pattern */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `radial-gradient(circle at 25% 25%, #0019FF10 0%, transparent 50%), 
                               radial-gradient(circle at 75% 75%, #0019FF08 0%, transparent 50%)`,
                        }}
                    />

                    {/* Main Content */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            padding: '80px',
                            zIndex: 1,
                        }}
                    >
                        {/* Logo/Avatar placeholder */}
                        <div
                            style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '60px',
                                backgroundColor: '#0019FF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '40px',
                                boxShadow: '0 20px 40px rgba(0, 25, 255, 0.2)',
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '48px',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontFamily: 'system-ui, -apple-system, sans-serif',
                                }}
                            >
                                S
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            style={{
                                fontSize: '64px',
                                fontWeight: 'bold',
                                color: '#1e293b',
                                margin: '0 0 24px 0',
                                fontFamily: 'system-ui, -apple-system, sans-serif',
                                lineHeight: 1.1,
                            }}
                        >
                            {title}
                        </h1>

                        {/* Description */}
                        <p
                            style={{
                                fontSize: '28px',
                                color: '#64748b',
                                margin: 0,
                                fontFamily: 'system-ui, -apple-system, sans-serif',
                                maxWidth: '800px',
                                lineHeight: 1.4,
                            }}
                        >
                            {description}
                        </p>

                        {/* Accent Line */}
                        <div
                            style={{
                                width: '100px',
                                height: '4px',
                                backgroundColor: '#0019FF',
                                marginTop: '40px',
                                borderRadius: '2px',
                            }}
                        />
                    </div>

                    {/* Bottom branding */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '40px',
                            right: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                        }}
                    >
                        <div
                            style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '4px',
                                backgroundColor: '#0019FF',
                            }}
                        />
                        <span
                            style={{
                                fontSize: '18px',
                                color: '#64748b',
                                fontFamily: 'system-ui, -apple-system, sans-serif',
                            }}
                        >
                            satyaprakash.design
                        </span>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
} 