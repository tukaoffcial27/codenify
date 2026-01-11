import json
import random
import itertools

def generate_pseo_data(target_count=20000):
    # LAYER 1: Core Tools
    tools = {
        "QR Code Generator": "qrcode",
        "JSON Formatter": "json",
        "CSS Minifier": "css",
        "Base64 Converter": "base64"
    }

    # LAYER 2: Platforms & Environments (Contoh 25 dari 100+)
    platforms = [
        "Next.js App Router", "React Server Components", "AWS Lambda Functions", 
        "Shopify Liquid Templates", "Salesforce Apex Code", "Kubernetes Config Maps", 
        "WordPress Headless CMS", "SAP ERP Systems", "Oracle Database Payloads",
        "Google Cloud Run", "Django Rest Framework", "Laravel Eloquent",
        "Vue.js Vite Bundles", "Magento 2 E-commerce", "Microsoft Azure Functions",
        "Stripe API Integrations", "Firebase Realtime DB", "Docker Container Logs",
        "Swift Mobile Apps", "Kotlin Android Backend", "Spring Boot Microservices"
    ]

    # LAYER 3: Industries & Domains
    industries = [
        "FinTech Banking", "Healthcare MedTech", "Government GovTech", 
        "Global Logistics", "Cybersecurity Audit", "E-commerce Retail",
        "Real Estate PropTech", "Legal Technology", "Renewable Energy",
        "Autonomous Vehicles", "Quantum Computing", "EdTech Learning",
        "Digital Marketing", "Cryptocurrency Exchange", "Aerospace Engineering",
        "Hospitality Systems", "Manufacturing IoT", "Telecommunications"
    ]

    # LAYER 4: Specific Actions & Problems
    actions = [
        "Debugging Errors", "GDPR Compliance", "HIPAA Security", 
        "Speed Optimization", "Data Obfuscation", "System Integration",
        "Workflow Automation", "Latency Reduction", "Secure Transmission",
        "Format Validation", "Legacy Migration", "Protocol Exchange"
    ]

    # Menghasilkan semua kombinasi yang mungkin
    all_combinations = list(itertools.product(tools.keys(), platforms, industries, actions))
    
    # Ambil 20.000 secara acak tanpa duplikat
    selected_combinations = random.sample(all_combinations, min(target_count, len(all_combinations)))

    results = []
    for tool_name, plat, ind, act in selected_combinations:
        # Membuat Use Case yang manusiawi
        use_case = f"{plat} for {ind} {act}"
        
        # Membuat Slug yang SEO Friendly
        clean_tool = tool_name.lower().replace(" ", "-")
        clean_use_case = use_case.lower().replace(".", "").replace(" ", "-").replace("/", "-")
        slug = f"{clean_tool}-for-{clean_use_case}"

        results.append({
            "tool": tool_name,
            "toolSlug": tools[tool_name],
            "useCase": use_case,
            "slug": slug
        })

    return results

# Eksekusi dan Simpan ke File
data_20k = generate_pseo_data(20000)
with open('global_20k.json', 'w') as f:
    json.dump(data_20k, f, indent=2)

print(f"Berhasil membuat {len(data_20k)} data di global_20k.json")